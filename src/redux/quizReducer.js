import { createSlice } from "@reduxjs/toolkit";
import { quiz } from "../main";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuiz: quiz,
  },
  reducers: {
    addQuestion: (state, action) => {
      // state.currentQuiz = state.currentQuiz.push(action.payload);
      console.log(state.currentQuiz.push(action.payload));
    },
    editQuestion: (state, action) => {},
    deleteQuestion: (state, action) => {},
  },
});

export const { addQuestion, editQuestion, deleteQuestion } = quizSlice.actions;
export default quizSlice.reducer;
