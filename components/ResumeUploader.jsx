'use client';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import upload from '../public/assets/upload.svg';

export default function Component() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]);
  }, []);

  const removeFile = () => {
    setUploadedFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <h2 className="text-xl font-bold mb-4">Add your resume below</h2>
            <div
              {...getRootProps()}
              className={`border-dashed border-2 p-6 text-center rounded-lg ${
                isDragActive ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              <Image className='h-8 w-8 mx-auto  items-center justify-center' src={upload} alt="Upload Icon" width={100} height={100} />
              <p className="text-gray-600 cursor-pointer hover:text-blue-500 hover:underline active:text-blue-700">
                Drag and drop your file here <br />or <br />click to select a file
              </p>
            </div>
            {uploadedFile && (
              <div className="text-center text-gray-600 mt-4">
                Uploaded file: 
                <span className="bg-sky-500 hover:bg-sky-700 text-white rounded px-5 ml-2">
                  <a href={URL.createObjectURL(uploadedFile)} target="_blank" rel="noopener noreferrer">
                    {uploadedFile.name}
                  </a>
                </span>
                <button onClick={removeFile} className="bg-red-500 text-white rounded px-2 ml-2">
                  X
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-600">Or</span>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-xl font-bold mb-4">Describe the Position</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                  Company name
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="job-description" className="block text-sm font-medium text-gray-700">
                  Job Description
                </label>
                <textarea
                  id="job-description"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className=" mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Start an interview
          </button>
        </div>
      </div>
    </div>
  );
}
