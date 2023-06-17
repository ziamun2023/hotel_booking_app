

import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const ReserveDate = () => {
  return (
 <div className='bg-white rounded-xl border-[1px] flex flex-col items-center border-neutral-200 overflow-hidden' >
<div className='flex flex-row items-center gap-1 p-4 w-full'>
    <div className='text-2xl font-semibold'> $ 200</div>
    <div className='font-light  text-neutral-600'> night </div>

</div>
<hr />
<div className='' ><DateRange
      rangeColors={['#262626']}
      date={new Date()}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
    /></div>
    <div className='p-4'>
        <button className='' label='Reserve'>Reserv</button>

    </div>
<hr />
<div className='flex flex-row items-center justify-between gap-1 p-4 w-full'>
    <div className='text-2xl font-semibold'> total</div>
    <div className='text-2xl font-semibold'> $300 </div>

</div>
 </div>


  )
}

export default ReserveDate