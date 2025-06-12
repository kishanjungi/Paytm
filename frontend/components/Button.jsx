export function Button({label,onClick}){
    return <button type="button" onClick={onClick}  className="w-full text-white bg-slate-800 hover:bg-slate-900  focus:ring-grey-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </button>
}