"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SongSeekerProps {
  value?: number;
  onChange?: (value: number[]) => void;
}

const SongSeeker: React.FC<SongSeekerProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue); 
  };

  return (
    <RadixSlider.Root
      className="
        relative 
        flex 
        items-center 
        select-none 
        touch-none 
        w-full 
        h-10
      "
      defaultValue={[0]}
      value={[value]}
      onValueChange={handleChange}
      max={100}
      step={1}
      aria-label="Song Seeker"
    >
      <RadixSlider.Track
        className="
          bg-neutral-600 
          relative 
          grow 
          rounded-full 
          h-[3px]
        "
      >
        <RadixSlider.Range
          className="
            absolute 
            bg-white 
            rounded-full 
            h-full
          "
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default SongSeeker;