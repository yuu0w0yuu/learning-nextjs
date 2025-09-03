import { NextResponse } from 'next/server';
import supabase from '@/app/utils/database';

export async function DELETE(request, context) {
    const { id } = await context.params

    try{
        const {data, error} = await supabase.from("items")
            .select()
            .eq("id", id)
            .single();
        if(error) throw new Error(error.message);

        if(data.email === requestBody.email){
            await supabase.from("items")
                .delete()
                .eq("id", id);
            if(error) throw new Error(error.message);
            return NextResponse.json({ message: "Delete Success" });
        }else{
            return NextResponse.json({ message: "Email Mismatch" });
        }
    }catch(err) {
        return NextResponse.json({ message: "Delete Failed" });
    }
}