'use client';

import axios from 'axios';
import toast from 'react-hot-toast';
import * as z from 'zod';
import { Download, ImageIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Image from 'next/image';

import Heading from '@/components/Dashboard/heading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/Dashboard/empty';
import { LoaderPage } from '@/components/Dashboard/loader';
import { Card, CardFooter } from '@/components/ui/card';
import { amountOptions, formSchema, resolutionOptions } from './constants';
import { useProModal } from '@/app/hooks/use-pro-modal';

const ImagePage = () => {
  const proModal = useProModal();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      amount: '1',
      size: '512x512',
    },
  });

  const isLoading = form.formState.isSubmitting;


  // Image generation
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

      // clear any existing images
      setImages([]);

      // preapare data for image generation
      const requestData = {
        prompt: values.prompt,
        n: parseInt(values.amount, 10),
        size: values.size,
      };

      console.log("Sending Request Data to Backend: ", requestData); //log for debugging

      // send request to backend Api
      const res = await axios.post("/api/image/generate", requestData);
      const imageUrls = res.data.imageUrls;

      setImages(imageUrls);
      // image generation
      form.reset();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response) {
      toast.error("Upgrade your plan :", error.response.data);
    }
    if (error?.response?.status === 400) {
      toast.error("Bad Request! Check the request parameters.");
    } else if (error?.response?.status === 403) {
      proModal.onOpen();
    } else {
      toast.error("Something went wrong!");
    }
  }
  
  };

  return (
    <div className='h-full'>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-violet-600"
        bgColor="text-violet-600/10"
      />
      <div className="px-4 lg:px-8">
        <div className='rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border'>
          <Form {...form}>
            <form
              
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0 bg-gray-800">
                      <Input
                        className="p-3 border-0 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus:ring-transparent focus:ring-offset-0"
                        disabled={isLoading}
                        placeholder="Write your prompt here."
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl className='bg-gray-800'>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='bg-gray-800'>
                        {amountOptions.map((options) => (
                          <SelectItem key={options.value} value={options.value}>
                            {options.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl className='bg-gray-800'>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='bg-gray-800'>
                        {resolutionOptions.map((options) => (
                          <SelectItem key={options.value} value={options.value}>
                            {options.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <LoaderPage />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No images generated." />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={src} fill alt="Generated Image" />
                </div>
                <CardFooter className="p-2">
                  <Button
                    className="w-full"
                    variant="secondary"
                    onClick={() => window.open(src)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;