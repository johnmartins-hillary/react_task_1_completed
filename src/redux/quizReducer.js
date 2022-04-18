import { createSlice } from "@reduxjs/toolkit";
import { quiz } from "../main";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuiz: quiz,
  },
  reducers: {
    addQuestion: (state, action) => {
      state.currentQuiz = [...state?.currentQuiz, action.payload];
    },
    editQuestion: (state, action) => {
      console.log(action.payload);
      state.currentQuiz = state.currentQuiz.map((item) => {
        if (item?.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    deleteQuestion: (state, action) => {
      console.log(state.currentQuiz);
      state.currentQuiz = state.currentQuiz.filter(
        (item) => item.id !== action.payload
      );
    },
  }, 
});

export const { addQuestion, editQuestion, deleteQuestion } = quizSlice.actions;
export default quizSlice.reducer;
