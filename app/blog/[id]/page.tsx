import React from 'react'
import Widgets from '../Widgets'
import SignUpPrompt from '../SignUpPrompt'
import { FaArrowLeft, FaChartSimple, FaEllipsis } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'
import { IoChatbubbleEllipsesSharp, IoHeart, IoShare } from 'react-icons/io5'
import { PostHeader } from '../Post'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const fetchPost = async (id: string) => {
  const postRef = doc(db, "posts", id)
  const postSnap = await getDoc(postRef)
  return postSnap.data()
}

type Props = {
  params: {
    id: string
  }
}

interface Comment {
  name: string
  text: string
  username: string
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Post ${params.id}`,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const post = await fetchPost(id)

  if (!post) return notFound()

  return (
    <>
      <div className='min-h-screen text-primary max-w-[1400px] mx-auto flex pt-25 justify-center'>
        <div className='flex-grow max-w-2xl border-x border-gray-300 items-center justify-center'>
          <div className='py-4 px-3 text-xl sm:text-3xl top-0 font-bold z-50 flex items-center sticky border-b border-gray-300'>
            <Link href="/blog">
              <FaArrowLeft className='w-5 h-5 mr-10' />
            </Link>
            Profile
          </div>

          <div className='flex flex-col p-3 space-y-5 border-b border-gray-300'>
            <div className='flex justify-between items-center mb-1.5'>
              <div className='flex space-x-3'>
                <Image
                  src={'/user.png'}
                  width={44}
                  height={44}
                  alt='Profile picture'
                  className='w-11 h-11'
                />
                <div className='flex flex-col'>
                  <span className='font-bold text-primary whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]'>
                    {post?.name}
                  </span>
                  <span className='text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]'>
                    {post?.username}
                  </span>
                </div>
              </div>
              <FaEllipsis />
            </div>

            <span className='text-md'>{post?.text}</span>
          </div>

          <div className='border-b border-gray-300 p-3 text-[15px]'>
            <span className='font-bold'>{post?.likes.length}</span> Likes
          </div>

          <div className='border-b border-gray-300 p-3 justify-evenly flex'>
            <IoChatbubbleEllipsesSharp className='w-[22px] h-[22px] cursor-pointer hover:text-[#63c7f5] transition' />
            <IoHeart className='w-[22px] h-[22px] cursor-pointer hover:text-[#63c7f5] transition' />
            <FaChartSimple className='w-[22px] h-[22px] cursor-not-allowed' />
            <IoShare className='w-[22px] h-[22px] cursor-not-allowed' />
          </div>

          {post?.comments.map((comment: Comment, index: number) => (
            <Comment
              key={index}
              name={comment.name}
              username={comment.username}
              text={comment.text}
            />
          ))}
        </div>

        <Widgets />
      </div>

      <SignUpPrompt />
    </>
  )
}

interface CommentProps {
  name: string
  username: string
  text: string
}

function Comment({ name, username, text }: CommentProps) {
  return (
    <div className='border-b border-gray-300'>
      <PostHeader name={name} username={username} text={text} />
      <div className='flex space-x-16 p-3 mx-6'>
        <IoChatbubbleEllipsesSharp className='w-[22px] h-[22px] cursor-pointer hover:text-[#63c7f5] transition' />
        <IoHeart className='w-[22px] h-[22px] cursor-pointer hover:text-[#63c7f5] transition' />
        <FaChartSimple className='w-[22px] h-[22px] cursor-not-allowed' />
        <IoShare className='w-[22px] h-[22px] cursor-not-allowed' />
      </div>
    </div>
  )
}
