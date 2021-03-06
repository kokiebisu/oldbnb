interface Props {
  img: string;
  houseType: string;
  houseName: string;
  title: string;
}

export const Card: React.FC<Props> = ({ img, houseType, houseName, title }) => {
  return (
    <div className='w-full lg:w-1/4 lg:p-1 my-3'>
      <img src={img} alt='' className='rounded' />
      <p className='my-1 uppercase text-gray-600 text-xs font-semibold tracking-wide'>
        {houseType} <span>•</span> {houseName}
      </p>
      <p className='text-lg text-gray-900'>{title}</p>
      <p className='my-1 text-gray-600 font-thin text-sm'>$285/night</p>

      <div className='flex items-center flex-wrap justify-start'>
        <svg
          className='fill-current w-2 h-2 text-cyan mr-1'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
        </svg>
        <svg
          className='fill-current w-2 h-2 text-cyan mr-1'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
        </svg>
        <svg
          className='fill-current w-2 h-2 text-cyan mr-1'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
        </svg>
        <svg
          className='fill-current w-2 h-2 text-cyan mr-1'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
        </svg>
        <svg
          className='fill-current w-2 h-2 text-cyan mr-1'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
        </svg>
        <p className='text-xs text-gray-600 pl-1 font-thin'>
          467 <span aria-hidden>•</span> Superhost
        </p>
      </div>
    </div>
  );
};
