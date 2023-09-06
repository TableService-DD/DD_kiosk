type Props = {
  title: string;
};
function TitleBtn({ title }: Props) {
  return (
    <button className="w-full bg-white text-[28px] semibolder rounded-xl text-Gray01">
      {title}
    </button>
  );
}

export default TitleBtn;
