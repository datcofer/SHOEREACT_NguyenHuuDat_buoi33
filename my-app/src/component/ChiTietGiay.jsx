import React from 'react'

const ChiTietGiay = ({ shoeDetail }) => {
  
  return (
    <div className='flex mt-6'>
      <div className='w-3/12'>
        <img src={shoeDetail.image} alt="" />
      </div>
      <div className='w-9/12'>
        <h3 className='text-2xl font-bold'>Thông tin chi tiết sản phẩm</h3>
        <table border={2} cellPadding={10}>
          <tr>
            <td className='font-bold'>Name: </td>
            <td>{shoeDetail.name}</td>
          </tr>
          <tr>
            <td className='font-bold'>Alias: </td>
            <td>{shoeDetail.alias}</td>
          </tr>
          <tr>
            <td className='font-bold'>Price: </td>
            <td>{shoeDetail.price}$</td>
          </tr>
          <tr>
            <td className='font-bold'>Description: </td>
            <td>{shoeDetail.description}</td>
          </tr>
          <tr>
            <td className='font-bold'>Short Description: </td>
            <td>{shoeDetail.shortDescription}</td>
          </tr>
          <tr>
            <td className='font-bold'>Quantity: </td>
            <td>{shoeDetail.quantity}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
export default ChiTietGiay;
