import { Button } from '@/components/ui/button';
import { FabricImage } from 'fabric';
import ImageKit from 'imagekit';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { Loader2Icon } from 'lucide-react'; // if not imported yet

function UploadImage() {
  const { designId } = useParams();
  const [loading, setLoading] = useState(false); // ✅ correct destructuring
  const { canvasEditor } = useCanvasHook();

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onFileUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    try {
      const imageRef = await imagekit.upload({
        file: file,
        fileName: designId + '.png',
        isPublished: true,
      });
      console.log(imageRef?.url);

      const canvasImageRef=await FabricImage.fromURL(
        imageRef?.url
      )
      canvasImageRef.set ({
width : 200,
height: 200,
scaleX: 2,
scaleY: 1
      })
      canvasEditor.add(canvasImageRef);
      canvasEditor.renderAll();

    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="uploadImage">
          <h2
            className="p-2 bg-primary text-white rounded-md text-center text-sm"
          >
            {loading ? <Loader2Icon className="animate-spin" /> : 'Upload Image'}
          </h2>
        </label>
      </div>
      <input
        type="file"
        id="uploadImage"
        className="hidden"
        multiple={false}
        onChange={onFileUpload}
      />
    </div>
  );
}

export default UploadImage;


















