import TitleSection from '@/components/landing-page/TitleSection'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <section className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
        <TitleSection pill='Your workspace, Perfected' title="All-In-One Collaboration and Productivity Platform" />
        <div className='bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]'>
          <Button
            variant="secondary"
            className="w-full  rounded-[10px] p-6 text-2xl bg-background "
          >
            Get Cypress Free
          </Button>
        </div>
        <div className='md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]'>
          <Image
            width={1359}
            height={710}
            src='/appBanner.png' alt="Application Banner" />
          <div className='bottom-0 top-[-50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10' />
        </div>
      </section>
      <section className='relative'>
        <div className='overflow-hidden flex after:content[""] after:dark:from-brand-dark after:top-0 after:to-transparent after:from-background
        after:bg-gradient-to-l after:right-0 after:bottom-0 after:w-20 after:z-10 before:content[""] before:dark:from-brand-dark 
        before:to-transparent before:from-background before:bg-gradient-to-r before:top-0 before:left-0 before:bottom-0 before:w-20 after:absolute before:absolute 
        before:z-10
        '></div>

      </section>
    </>
  )
}

export default page