
import PreferenceForm from "@/components/preferenceForm/preferenceForm"

const HomePage = () => {
    return (
        <main className="flex flex-col justify-center gap-5  items-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-primary text-center">Welcome to SmartInvesting</h1>
        <p className="text-black text-center">slogan</p>
        <PreferenceForm/>
        </main>
    )
}
export default HomePage