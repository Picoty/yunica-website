import { NextResponse } from "next/server";
import courses from '../data.json'

export async function GET(request){
    const {searchParams} = new URL (request.url);
    constquery = searchParams.get ('query');
    const filteredCourses = filter.courses((course) => {
        return course.tittle.toLowercase.includes(query.toLowercase)
    });
    return NextResponse.json(courses);
}