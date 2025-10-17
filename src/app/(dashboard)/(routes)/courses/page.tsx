'use client';

import axios from 'axios';
import toast from 'react-hot-toast';
import * as z from 'zod';
import { BookOpen, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { parse } from 'jsonc-parser';

import Heading from '@/components/Dashboard/heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/Dashboard/empty';
import { LoaderPage } from '@/components/Dashboard/loader';

type CourseOutline = {
  title: string;
  summary: string;
  modules: {
    moduleTitle: string;
    moduleDescription?: string;
    lessons?: string[];
  }[];
};

const formSchema = z.object({
  topic: z.string().min(3, 'Topic must be at least 3 characters'),
});

const CourseGeneratorPage = () => {
  const [course, setCourse] = useState<CourseOutline | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { topic: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setCourse(null);
      setErrorMessage(null);
      setExpandedModules({});

      const res = await axios.post('/api/course', values);

      if (res.data?.result) {
        const resultString: string = res.data.result;
        const firstBrace = resultString.indexOf('{');
        const lastBrace = resultString.lastIndexOf('}');
        if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
          throw new Error('No valid JSON found in AI response.');
        }

        const jsonString = resultString.slice(firstBrace, lastBrace + 1);
        const courseData: CourseOutline = parse(jsonString) as CourseOutline;
        setCourse(courseData);
      } else {
        const msg = res.data?.error || 'No course data returned from the AI service.';
        setErrorMessage(msg);
        toast.error(msg);
      }

      form.reset();
    } catch (error: unknown) {
      const err = error as { message?: string; response?: { status?: number; data?: any } };
      const apiMsg = err?.response?.data?.error;

      if (err?.response?.status === 401) {
        setErrorMessage('Unauthorized. Please sign in again.');
        toast.error('Unauthorized. Please sign in again.');
      } else if (err?.response?.status === 400) {
        setErrorMessage('Bad Request! Topic is missing or too short.');
        toast.error('Bad Request! Topic is missing or too short.');
      } else if (apiMsg) {
        setErrorMessage(apiMsg);
        toast.error(apiMsg);
      } else {
        setErrorMessage(err?.message || 'Something went wrong during generation!');
        toast.error(err?.message || 'Something went wrong during generation!');
        console.error("Client error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1e2738] text-white">
      <Heading
        title="Course Generation"
        description="Generate a complete programming course outline using IBM watsonx.ai."
        icon={BookOpen}
        iconColor="text-violet-600"
        bgColor="text-violet-600/10"
      />

      <div className="px-4 lg:px-8">
        {/* Topic Input Form */}
        <div className="rounded-md lg:rounded-xl bg-[#1f2937] border border-gray-700 shadow-sm">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full p-4 md:px-6 grid grid-cols-12 gap-3 rounded-lg focus-within:shadow-md bg-transparent"
            >
              <FormField
                name="topic"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10 flex items-center">
                    <FormControl>
                      <Input
                        className="p-3 w-full bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-transparent placeholder-gray-400"
                        disabled={isLoading}
                        placeholder="e.g. Data Structures in C++"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="col-span-12 lg:col-span-2 flex items-center">
                <Button
                  type="submit"
                  className="w-full h-full flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white transition duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Generating...
                    </>
                  ) : (
                    'Generate Outline'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Course Output */}
        <div className="space-y-4 mt-6">
          {isLoading && (
            <div className="p-20">
              <LoaderPage />
            </div>
          )}

          {errorMessage && !isLoading && (
            <div className="bg-red-900/40 border border-red-700 text-red-200 rounded-md p-4">
              {errorMessage}
            </div>
          )}

          {!course && !isLoading && !errorMessage && (
            <Empty label="Enter a topic above to generate a course outline." />
          )}

          {course && (
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4 shadow-xl">
              <h2 className="text-3xl font-extrabold text-violet-400 border-b border-violet-800 pb-2">
                {course.title}
              </h2>
              <p className="text-gray-300 italic text-lg">{course.summary}</p>

              <div className="mt-6 space-y-4">
                {course.modules.map((mod, index) => {
                  const isExpanded = !!expandedModules[index];
                  return (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-xl border-l-4 border-violet-500 shadow-md transition hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full flex justify-between items-center p-5 focus:outline-none"
                      >
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 mr-3 text-violet-500" />
                          <h3 className="text-xl font-bold text-violet-300">
                            Module {index + 1}: {mod.moduleTitle}
                          </h3>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-violet-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-violet-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-8 pb-5 space-y-2">
                          {mod.moduleDescription && (
                            <p className="text-gray-400 text-sm">{mod.moduleDescription}</p>
                          )}
                          {mod.lessons && mod.lessons.length > 0 && (
                            <ul className="text-gray-300 space-y-1 mt-2">
                              {mod.lessons.map((lesson, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <span className="text-violet-500 mr-2">•</span>
                                  <span>{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseGeneratorPage;
