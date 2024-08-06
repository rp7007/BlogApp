import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full px-4 sm:px-6 md:px-8'>
      {label && <label className='inline-block mb-2 pl-1 text-sm md:text-base'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <div className="w-full">
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              initialValue={defaultValue}
              init={{
                height: 500,
                width: '100%',
                menubar: true,
                plugins: [
                  "image", "advlist", "autolink", "lists", "link", "image",
                  "charmap", "preview", "anchor", "searchreplace", "visualblocks",
                  "code", "fullscreen", "insertdatetime", "media", "table",
                  "code", "help", "wordcount", "anchor"
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                resize: true,
                resize_on_ui_update: true
              }}
              onEditorChange={onChange}
              className="w-full"
            />
          </div>
        )}
      />
    </div>
  );
}
