/** @type {import('./$types').Actions} */
export let actions={
    default: async ({request})=>{
        const formData = await request.formData()
        let email=formData.get('email')
        let password=formData.get('password')
        try{
            
        }
        catch(e){
            console.error(e)
        }
    },
}