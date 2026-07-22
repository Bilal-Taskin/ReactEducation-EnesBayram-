import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//state ismi ali veli enes de olabilir ama bunu createSlice methodunda initialstate:ali şeklinde vermeliyiz
const initialState = {
  users: [],
  loading: false,
};

export const getAllUser = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(response.data);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //http isteği olmayan fonksiiyonlarda kullanılırlar
  },
  extraReducers: (builder) => {
    //http istekleri içeren fonksiyonlar burada tanımlanır
    //yukarıda getAllUser fonkisyonu çektiğimiz veriler initalstatdeki users içine burada doldurulu

    //burada getalluser fonksiyonu biryer tarafından çağırıldığında (bizdeki userlist içinde useffec ilr çağırıldı) ve başarılı olduğunda şu işlemi yap demektir. İşlem ise bir sonraki arrow function olan paramterde belirtilir. Bu fonksiyonun parametrelerinden state bizim initial stateimizi işaret ederken action ise getallusers'ın return ettiği değeri ifade eder.
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      //action payload diyerek getallussers'ın datalarını alıp users dizisine atamış oluruz. Yani artık kullanıcılar stateimizim içinde ve istediğimiz yerden erişebiliriz
      state.users = action.payload;
    });
  },
});

//buraya sadece reducer içine konulan fonkisyonlar konur
export const {} = userSlice.actions;
export default userSlice.reducer;
