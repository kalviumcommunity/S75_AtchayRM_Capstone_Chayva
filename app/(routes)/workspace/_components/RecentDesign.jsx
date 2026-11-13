
"use client"

import Image from 'next/image'
import React, { useState, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { useQuery, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { UserDetailContext } from '@/context/UserDetailContext'
import CustomCanvasDialog from './CustomCanvasDialog'

function RecentDesign() {

    const { userDetail } = useContext(UserDetailContext);

    const [editingId, setEditingId] = useState(null);
    const [newName, setNewName] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // GET USER DESIGNS
    const designs = useQuery(
        api.designs.GetUserDesigns,
        userDetail ? { uid: userDetail._id } : "skip"
    );

    // UPDATE AND DELETE MUTATIONS
    const updateDesign = useMutation(api.designs.UpdateDesign);
    const deleteDesign = useMutation(api.designs.DeleteDesign);

    // UPDATE DESIGN
    const handleUpdate = async (id) => {
        if (!newName.trim() || isSaving) return;

        try {
            setIsSaving(true);

            await updateDesign({
                id: id,
                name: newName.trim()
            });

            setEditingId(null);
            setNewName("");
        } finally {
            setIsSaving(false);
        }
    };

    // DELETE DESIGN
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Delete this design?");

        if (confirmDelete) {
            await deleteDesign({ id });
        }
    };

    return (
        <div className='mt-7'>

            <h2 className='font-bold text-2xl'>Recent Design</h2>

            {!designs || designs.length === 0 ? (

                <div className='flex flex-col gap-4 items-center mt-5'>
                    <Image
                        src='/edittool.png'
                        alt='edit'
                        width={100}
                        height={100}
                    />

                    <h2 className='text-center'>
                        You don't have any new design, create one!
                    </h2>

                    <CustomCanvasDialog>
                        <Button>+ Create New</Button>
                    </CustomCanvasDialog>
                </div>

            ) : (

                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>

                    {designs.map((design) => (

                        <div key={design._id} className='border rounded-lg p-4'>

                            {editingId === design._id ? (

                                <div>
                                    <input
                                        className='border p-2 w-full rounded'
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                    />

                                    <Button
                                        className='mt-2'
                                        disabled={!newName.trim() || isSaving}
                                        onClick={() => handleUpdate(design._id)}
                                    >
                                        {isSaving ? "Saving..." : "Save"}
                                    </Button>

                                    <Button
                                        variant='outline'
                                        className='mt-2 ml-2'
                                        disabled={isSaving}
                                        onClick={() => {
                                            setEditingId(null);
                                            setNewName("");
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>

                            ) : (

                                <h3 className='font-semibold'>
                                    {design.name}
                                </h3>

                            )}

                            <div className='flex gap-2 mt-3'>

                                <Button
                                    onClick={() => {
                                        setEditingId(design._id);
                                        setNewName(design.name);
                                    }}
                                >
                                    Edit
                                </Button>

                                <Button
                                    variant='destructive'
                                    onClick={() => handleDelete(design._id)}
                                >
                                    Delete
                                </Button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    )
}

export default RecentDesign
