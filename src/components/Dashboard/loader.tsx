
import { Dot} from 'lucide-react';

export const LoaderPage = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-20 h-20 relative animate-spin">
        <Dot />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        Image is loading...
      </p>
    </div>
  );
};