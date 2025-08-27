// export const getAllNotes = (req, res) => {
//     res.status(200).send("You just fetched the notes");
// }

export async function getAllNotes(req, res){
    res.status(200).send("You just fetched the notes");
}

export function createNotes(req, res) {
    res.status(201).json({message: "Note created successfully!"});
}

export function updateNotes(req, res) {
    res.status(200).json({message : "Note updated successfully!"});
}

export function deleteNotes(req, res) {
    res.status(200).json({message : "Note deleted successfully!"});
}