import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonSinglePost } from "@/server/posts";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import {notFound} from "next/navigation";

const BlogSimple = async ({ params }) => {
    const { id } = await params;
    const post = await getJsonSinglePost(id);

    if(post.status === "error"){
        return notFound();
    }
    
    return (
        <>
            <h1>Soy Blog Simple</h1>

                
            <Card title={post.title}>{post.body}</Card>

            <Link href={`./blog`}>
                <Button size="sm" >Volver</Button>
            </Link>

            <LikeButton>
            </LikeButton>
        </>
    );
}

export default BlogSimple;