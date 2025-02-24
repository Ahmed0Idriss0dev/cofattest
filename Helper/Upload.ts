import { supabase } from './SuperClient';

const Upload = async (pdf:File) => {
    const { data ,error} = await supabase.storage
    .from('Cv_uploader')
    .upload(`public/${Date.now()}-user-cv.pdf`, pdf);
    if(error){
        throw new Error('you have error')
    } 
    const { data:file } = await supabase.storage
    .from('Cv_uploader')
    .getPublicUrl(data.path);
    return file.publicUrl
}

export default Upload