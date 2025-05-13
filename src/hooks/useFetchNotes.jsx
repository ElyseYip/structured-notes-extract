import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../api";

export default function useFetchNotes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiCall({ name: "FETCH_NOTES" }));
  }, []);

  const notesData = useSelector((state) => state.notes);

  // const subscribedNotesData = useSelector(state => state.NotesSummary);
  // const depositData = useSelector(state => state.ListDeposit);

  const getSingleNote = (noteSymbol) =>
    notesData.find((item) => {
      return item.symbol === noteSymbol;
    });

  // const getSingleNoteById = (noteId) =>
  //   notesData.find((item) => {
  //     return item.id === stringToNum(noteId);
  //   });

  return {
    notesData,
    getSingleNote,
  };
}
