export default function Page1() {
    return (
        <div className='flex justify-center items-center h-screen bg-custom-background bg-cover bg-center' style={{ backgroundImage: `url('/avif/redcar.avif')` }}>
            <div className="w-full h-screen flex flex-col">
                <div className=" h-screen flex justify-center items-center flex-col">
                    <h1 className="text-[40px] font-bold">Model 3</h1>
                    <div className="flex gap-2 md:visible invisible">
                        <p>สำหรับการส่งมอบทันที</p>
                        <p>เข้าชม<a className="underline underline-offset-1 border-2">สินค้าคงคลัง</a></p>
                    </div>
                    <div className="flex md:invisible visible border-2">
                        <p className="underline underline-offset-1">รถที่พร้อมส่งมอบ</p>
                    </div>
                </div>

                <div className=" h-screen flex justify-center items-end">
                    <div className="mb-[70px] gap-6 flex md:flex-row flex-col justify-center items-center w-full px-4">
                        <button className="flex md:flex-none justify-center items-center bg-[#2E3139] text-white md:w-[230px] md:h-[35px] w-full h-[35px] text-[15px] rounded ">สั่งทำพิเศษ</button>
                        <button className="flex md:flex-none justify-center items-center bg-white text-gray-500 md:w-[230px] md:h-[35px] w-full h-[35px] text-[15px] rounded ">ทดลองขับ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
