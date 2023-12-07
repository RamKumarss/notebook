import { ListType } from '@/Interfaces';
import React, { useEffect, useState } from 'react';

interface ListTableProps {
  list: ListType[];
  setList: Function;
}

const ListTable: React.FC<ListTableProps> = ({ list, setList }) => {

  const removeItem = (itemIndex: Number) => {
    let newList = list.filter((item, index) => index !== itemIndex);
    setList(newList);
  };

  return (
    <div id='list' className='flex border my-5 p-4 justify-center rounded-md '>
      <ul className='w-full'>
        {list.length ? (
          list.map((item, index) => (
            <li
              key={index}
              className='text-black flex justify-between w-full mb-2'
            >
              <div>{item.content}</div>
              <div>{item.quantity}</div>
              <div className='text-red-700' id='remove-btn' onClick={(e) => removeItem(index)}>
                Remove
              </div>
              <hr />
            </li>
          ))
        ) : (
          <li className='text-white'>Please Add Items...</li>
        )}
      </ul>
    </div>
  );
};

export default ListTable;
