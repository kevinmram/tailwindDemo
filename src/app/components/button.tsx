// Imports
import { IconArrowNarrowRight } from '@tabler/icons-react';

interface ButtonProps {
  label: string;
}

/*
  Preconditions:
  1. Button component should accept a `label` prop to display text.
  2. Should render an arrow icon to the right of the label text.
  3. Default button should have a transparent bg and #FFDCDC color text and border
  4. On hover fills with #FFDCDC and text color is now #A52424 no border
*/
export default function Button(props: ButtonProps) {
  return (
    <>
      <button className="flex flex-row bg-black text-[#FFDCDC] px-2 py-4 rounded-lg font-semibold hover:bg-[#FFDCDC] hover:text-[#A52424] border-2">
        <div>Our Course Offering</div>
        <IconArrowNarrowRight></IconArrowNarrowRight>
      </button>
    </>
  )
}
