"use client"
import React, { useState } from 'react';
import { Button } from "../../../components/ui/button";
import { Input } from '../../../components/ui/input';
import { Pencil } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FormTitle = ({ data }) => {
    const [editing, setEditing] = useState(false);
    const [titte, setTitle] = useState(data?.titte || ""); // Fix: Set initial value properly
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`/api/courses/${data.id}`, { titte });
            setEditing(false);
            router.refresh();
            toast.success("Title updated successfully")


        } catch (e) {
            toast.error("Something went wrong")
        }

    };

    return (
        <div className='mt-6 border bg-slate-100 rounded-sm p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course Title
                <Button onClick={() => setEditing(!editing)} className="cursor-pointer" variant="ghost">
                    {editing ? "Cancel" : <><Pencil className='h-4 w-4 mr-2' />Edit Title</>}
                </Button>
            </div>

            {!editing ? (
                <p className='text-sm mt-2  border p-2'>{data?.titte || "No title available"}</p>
            ) : (
                <form className="space-y-4 mt-4" onSubmit={onSubmit}>
                    <Input
                        placeholder='e.g. "Advanced Web Development"'
                        required
                        value={titte}
                        onChange={(e) => setTitle(e.target.value)} // Fix: Update state on input change
                    />
                    <div className="flex items-center gap-x-2">
                        <Button type="submit" className="cursor-pointer">
                            Save
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default FormTitle;
