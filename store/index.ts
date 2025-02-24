import { create } from 'zustand'
interface Strore {
    setImagePath:(src:string)=> void ,
    ImagePath:string
}
const useStore = create<Strore>((set) => ({
    ImagePath: '',
  setImagePath: (newBears) => set({ ImagePath: newBears }),
}))

export default useStore