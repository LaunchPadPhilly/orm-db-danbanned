"use client";
import { useState } from "react";

export default function TechnologyInput({ technologies, onChange }) {
  const [input, setInput] = useState("");

  const predefined = ["JavaScript", "React", "Next.js"];

  const addTechnology = (tech) => {
    const trimmed = tech.trim();
    if (!trimmed) return;
    if (technologies.includes(trimmed)) return;

    onChange([...technologies, trimmed]);
    setInput("");
  };

  const removeTechnology = (tech) => {
    onChange(technologies.filter((t) => t !== tech));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology(input);
    }
  };

  return (
    <div>

      {/* Input + Add Button */}
      <div className="flex gap-2 mb-2">
        <input
          placeholder="Type a technology"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border p-2 rounded w-full"
        />

        <button
          type="button"
          onClick={() => addTechnology(input)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Predefined Technology Buttons */}
      <div className="flex gap-2 mb-2 flex-wrap">
        {predefined.map((tech) => (
          <button
            key={tech}
            type="button"
            disabled={technologies.includes(tech)}
            className="border px-3 py-1 rounded disabled:opacity-50"
            onClick={() => addTechnology(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Selected Technologies */}
      <div className="flex gap-2 flex-wrap mt-2">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
          >
            <span>{tech}</span>

            <button
              aria-label="Remove"
              onClick={() => removeTechnology(tech)}
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
