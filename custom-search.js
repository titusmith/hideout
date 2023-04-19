{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww12540\viewh16140\viewkind1
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 class CustomSearch \{\
  constructor(searchBarSelector, gridItemSelector, tagDataAttribute) \{\
    this.searchBar = document.querySelector(searchBarSelector);\
    this.gridItems = document.querySelectorAll(gridItemSelector);\
    this.tagDataAttribute = tagDataAttribute;\
\
    this.init();\
  \}\
\
  init() \{\
    this.searchBar.addEventListener("input", () => \{\
      this.filterItems();\
    \});\
  \}\
\
  filterItems() \{\
    const searchParam = this.searchBar.value.trim().toLowerCase();\
\
    this.gridItems.forEach((item) => \{\
      const tags = item.dataset[this.tagDataAttribute].toLowerCase();\
      if (tags.includes(searchParam)) \{\
        item.style.display = "block";\
      \} else \{\
        item.style.display = "none";\
      \}\
    \});\
  \}\
\
  setSearchValue(value) \{\
    this.searchBar.value = value;\
    this.filterItems();\
  \}\
\}\
\
window.CustomSearch = CustomSearch;\
}
