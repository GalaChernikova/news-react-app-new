import CNN from "./source/CNN";

export default function Main(){
    return(
        <div className="flex flex-col w-full justify-between m-5">
            <h2 className="font-serif text-start text-2xl">Latest News</h2>
            <CNN />
        </div>
    )
}