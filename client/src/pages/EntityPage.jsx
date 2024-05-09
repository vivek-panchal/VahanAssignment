import React from "react";
import EntityForm from "../components/EntityForm";
import EntityList from "../components/EntityList";

const EntityPage = () => {
  return (
    <main className="flex flex-col gap-8 px-8 pb-8">
      <EntityForm />
      <EntityList />
    </main>
  );
};

export default EntityPage;
