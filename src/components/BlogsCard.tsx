import React from 'react'
import Link from 'next/link'

interface blog {
    title: string,
    content: string,
    image?: string,
    routeLink?: string,
    latest?: boolean
}

const BlogsCard: React.FC<blog> = ({
    title,
    content,
    image = "/images/blog_placeholder.jpg",
    routeLink = "",
    latest = false
}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-lg p-2">
                <figure>
                    <img
                        src={image}
                        alt="Blog Image" />
                </figure>
                <div className="card-body">
                    {latest ? (
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    ) : (
                        <h2 className="card-title font-bold mb-2">
                            {title}
                        </h2>

                    )}
                    <p className='text-justify'>{content}</p>
                    <div className="card-actions justify-end mt-5">
                        <Link href={routeLink}>
                            <div className="badge badge-outline font-medium">Read More</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogsCard