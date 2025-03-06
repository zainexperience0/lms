"use client";
import { UploadButton } from "@uploadthing/react";
import { ourFileRouter } from "../../app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
  endpoint: keyof typeof ourFileRouter;
  onChange: (url?: string) => void;
}

export const FileUpload = ({ endpoint, onChange }: FileUploadProps) => {
  return (
    <UploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res && res[0]?.url) {
          onChange(res[0].url); // Pass the uploaded file URL to the parent component
          toast.success("Upload completed!");
        }
      }}
      onUploadError={(error: Error) => {
        toast.error(`Upload failed: ${error.message}`);
      }}
    />
  );
};