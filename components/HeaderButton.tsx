import { motion } from 'framer-motion';

interface Props {
  color: string;
  description: string;
  name: string;
  borderColor: string;
  fontColor: string;
}

export const HeaderButton: React.FC<Props> = ({
  color,
  description,
  name,
  borderColor,
  fontColor,
}) => {
  return (
    <motion.div
      className='lg:pr-2 pb-3 w-full lg:w-1/2'
      initial='initial'
      animate='animate'>
      <p className='py-2 text-white font-thin tracking-wide'>{description}</p>
      <motion.a
        whileHover={{ scale: 0.95 }}
        transition={{ ease: 'easeInOut' }}
        whileTap={{ scale: 1.05 }}
        style={{
          backgroundColor: color,
          border: `${borderColor} 2px solid`,
          color: `${fontColor}`,
        }}
        className=' block text-center py-3 rounded font-semibold w-full'
        href='#'>
        {name}
      </motion.a>
    </motion.div>
  );
};
