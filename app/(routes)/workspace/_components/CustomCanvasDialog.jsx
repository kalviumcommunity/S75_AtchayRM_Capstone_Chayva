import React, { useContext, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserDetailContext } from '@/context/UserDetailContext';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function CustomCanvasDialog({ children }) {
  
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const { userDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

 const createDesignRecord = useMutation(api.designs.CreateNewDesign);
 const router=useRouter();

  const onCreate = async () => {
    toast('Loading...');
    setLoading(true);

    const result = await createDesignRecord({
      name: name,
      width: Number(width),
      height: Number(height),
      uid: userDetail?._id,
    });

    console.log(result);
    setLoading(false);
    // You can navigate to the editor screen here
    router.push('/design/'+result); 
};

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create custom canvas</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="text-sm">Provide Canvas Width & Height</h2>

              <div className="mt-5">
                <label>Design Name</label>
                <Input
                  placeholder="Design Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <div className="mt-4 flex gap-5 w-full">
                  <div className="w-full">
                    <label>Width</label>
                    <Input
                      className="mt-1 w-full"
                      placeholder="500"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label>Height</label>
                    <Input
                      className="mt-1 w-full"
                      placeholder="500"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  className="w-full"
                  disabled={loading || !name || !width || !height}
                  onClick={onCreate}
                >
                  {loading ? <Loader2Icon className="animate-spin" /> : 'Create'}
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CustomCanvasDialog;
