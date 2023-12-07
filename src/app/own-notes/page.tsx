'use client';
import { ListType } from '@/Interfaces';
import Button from '@/components/Button';
import CustomItems from '@/components/CustomItems'
import ListForPdf from '@/components/ListForPdf';
import ListTable from '@/components/ListTable';
import { downloadSlip } from '@/utility/downloadSlip';
import { printImage } from '@/utility/printSlip';
import React, { useState } from 'react'
 
const Page = () => {
  const [list, setList] = useState<ListType[]>([]);
  const downloadPDF = () => {
    if(list.length){
      downloadSlip();
    }
  };
  
  return (
    <div className='bg-gray-400 flex flex-col items-center p-4 h-screen '>
      <h1 className='text-xl text-white pb-5 font-bold'>Note Book</h1>
      {list.length ? <Button action={downloadPDF}>Download PDF</Button> : null}
      <div>
        <ListTable list={list} setList={setList}/>
        <CustomItems setList={setList}/>
      </div>
    </div>
  )
}

export default Page