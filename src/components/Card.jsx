export default function Card({title, children}){
    return(
        <>
        <section className="roundes-2x1 border border-gray-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <div className="mt-3 text-gray-600">{children}</div>
        </section>
        </>
    )
}