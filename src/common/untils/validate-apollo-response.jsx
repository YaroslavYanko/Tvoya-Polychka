export const validateApolloResponse= (queryResult)=>{
    if (queryResult.error) {
        throw new Error("Йой, щось не так, cпробуйте будь ласка пізніше");
      }
}