import React, { useState } from "react";

function ReadingListLink({ article }) {
  return (
    <div className="readingListLinkContainer">
      <span>Headline</span>
      <span>URL</span>
      <span>Read By</span>
      <span>Date Added</span>
      <button>X</button>
    </div>
  );
}

export default ReadingListLink;
