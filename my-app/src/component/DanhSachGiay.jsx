import React from 'react'

const DanhSachGiay = ({listShoe, title, updateShoe}) => {
    return (
        <>
            <h3 className='font-bold text-2xl text-center mt-10'>{title}</h3>
            <div className='grid grid-cols-4'>
                {listShoe.map((item, index) => {
                    const { image, name, price, id } = item;
                    return <div>
                        <img src={image} alt="" />
                        <h3 className='font-bold text-2xl'>{name}</h3>
                        <p className='mb-2'>Giá tiền: {price} $</p>
                        <button onClick={() => { updateShoe(item); }} className='py-2 px-5 bg-red-500 text-white rounded-lg'>Xem chi tiết</button>
                    </div>
                })}
            </div>
        </>
    
    );
}

export default DanhSachGiay;