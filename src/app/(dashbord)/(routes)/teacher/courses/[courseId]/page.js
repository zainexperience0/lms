
import { db } from "../../../../../../lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { LayoutDashboard, LucideBadge } from "lucide-react";
import FormTitle from "../../../../_components/FormTitle";
import DescriptionForm from "../../../../_components/DescriptionForm";
import ImageForm from "../../../../_components/UploadImageForm";
import { redirect } from "next/navigation";


export default async function CoursePage({ params }) {
    // Fetch the current user
    const user = await currentUser();
    if (!user) {
        return redirect("/login"); // Redirect if the user is not authenticated
    }

    const userId = user.id;

    // Access `courseId` from `params`
    const { courseId } = params;

    // Fetch the course using `courseId`
    const course = await db.course.findUnique({
        where: { id: courseId },
    });

    // If the course doesn't exist, redirect to the homepage
    if (!course) {
        return redirect("/");
    }

    const RequreFields = [
        course.titte,
        course.description,
        course.imageUrl,
        course.categoryId,
        course.price,
    ]
    const TotalFields = RequreFields.length;
    const ComplitedFields = RequreFields.filter(Boolean).length;
    const ComplitionText = `(${ComplitedFields}/${TotalFields})`

    return (
        <div className="p-6  overflow-y-scroll h-[86.5vh]   scrollbar-hidden  ">
            <div className="flex items-center  justify-between">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Course Setup

                    </h1>
                    <span className="text-sm text-slate-700 ">Complite all  fields {ComplitionText} </span>
                </div>

            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <LayoutDashboard  size={40} className="bg-blue-500 rounded-full p-2 "/>
                        <h2 className="text-xl">Custmize Your Course</h2>
                    </div>
                    <FormTitle  data={course}/>
                    <DescriptionForm  data={course}/>
                    <ImageForm data={course}/>
                </div>
            </div>

        </div>
    );
}
