import mongoose from 'mongoose';

export interface IToDo extends mongoose.Document {
  id: string;
  name: string;
  completed: boolean;
  categoryId: string;
  transform: () => IToDo;
}

// define the schema at the app level
const todoSchema: mongoose.Schema = new mongoose.Schema({
  name: { type: mongoose.SchemaTypes.String, required: true },
  completed: { type: mongoose.SchemaTypes.Boolean, required: true },
  categoryId: { type: mongoose.SchemaTypes.String },
});

/**
 * transforms book object,
 * changes _id to id
 */
todoSchema.methods.transform = function () {
  let obj = this.toObject();

  let id = obj._id;
  delete obj._id;
  obj.id = id;

  return obj;
};

// create a model for interacting with db
// export const ToDoModel = mongoose.model('todo', todoSchema);
export const ToDoModel = (dbConn: mongoose.Connection): mongoose.Model<IToDo> =>
  dbConn.model<IToDo>('todos', todoSchema);
