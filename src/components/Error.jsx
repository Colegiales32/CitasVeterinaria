const Error = ({mensaje}) => {
  return (
    <div className='my-2 bg-red-800 text-white text-center p-1 uppercase font-bold mb-3 rounded-md'>
    <p>{mensaje}</p>
       </div>
  )
}

export default Error;
