export const KeysList = ({keys}) => (
  <section
    className="flex justify-between py-4 px-[42px] items-center border border-w-2 border-dashed rounded-[24px]"
    style={{borderColor: 'rgba(0, 0, 0, 0.24)'}}
  >
    {keys.map(({id, content, isIcon}) => <div key={id}>{isIcon ? content : <span className="text-semi-md font-semibold -tracking-[2px]">{content}</span>}</div>)}
  </section>
);