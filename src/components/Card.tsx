import ButtonTitle from './ButtonTitle';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { CardProps } from '@/utils/types';

export default function Card(props: CardProps) {
  const { tier, features, price } = props.item;
  return (
    <div className="bg-[#f3f1f1] p-25 rounded-20 flex flex-col gap-50 justify-between items-start">
      <div>
        <span className="bg-white py-5 px-15 rounded-full text-[15px] font-[600]">
          {tier}
        </span>

        <div className="flex flex-col gap-15 mt-100">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-15">
              <span className="w-30 h-30 bg-white rounded-full grid place-items-center shrink-0">
                <CheckIcon className="w-20 h-20" />
              </span>
              <p className="text-[20px] font-[400]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <ButtonTitle
        linkClassName="w-full"
        title={`Beli ${price}`}
        icon={<ArrowRightIcon />}
      />
    </div>
  );
}
