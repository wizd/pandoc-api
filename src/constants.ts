import * as os from 'os';

export const tmpDir = `${os.tmpdir()}/pandoc-api`;

export const availableValues = {
  from: [
    'biblatex',          // (BibLaTeX bibliography)
    'bibtex',            // (BibTeX bibliography)
    'bits',              // (BITS XML)
    'commonmark',        // (CommonMark Markdown)
    'commonmark_x',      // (CommonMark Markdown with extensions)
    'creole',            // (Creole 1.0)
    'csljson',           // (CSL JSON bibliography)
    'csv',               // (CSV table)
    'djot',              // (Djot markup)
    'docbook',           // (DocBook)
    'docx',              // (Word docx)
    'dokuwiki',          // (DokuWiki markup)
    'endnotexml',        // (EndNote XML bibliography)
    'epub',              // (EPUB)
    'fb2',               // (FictionBook2 e-book)
    'gfm',               // (GitHub-Flavored Markdown)
    'haddock',           // (Haddock markup)
    'html',              // (HTML)
    'ipynb',             // (Jupyter notebook)
    'jats',              // (JATS XML)
    'jira',              // (Jira wiki markup)
    'json',              // (JSON version of native AST)
    'latex',             // (LaTeX)
    'man',               // (roff man)
    'markdown',          // (Pandoc's Markdown)
    'markdown_github',   // (deprecated GitHub-Flavored Markdown)
    'markdown_mmd',      // (MultiMarkdown)
    'markdown_phpextra', // (PHP Markdown Extra)
    'markdown_strict',   // (original unextended Markdown)
    'mdoc',              // (mdoc format)
    'mediawiki',         // (MediaWiki markup)
    'muse',              // (Muse)
    'native',            // (native Haskell)
    'odt',               // (ODT)
    'opml',              // (OPML)
    'org',               // (Emacs Org mode)
    'pod',               // (Perl POD)
    'ris',               // (RIS bibliography)
    'rst',               // (reStructuredText)
    'rtf',               // (Rich Text Format)
    't2t',               // (txt2tags)
    'textile',           // (Textile)
    'tikiwiki',          // (TikiWiki markup)
    'tsv',               // (TSV table)
    'twiki',             // (TWiki markup)
    'typst',             // (Typst)
    'vimwiki',           // (Vimwiki)
  ],
  to: [
    'ansi',              // (ANSI formatted)
    'asciidoc',          // (AsciiDoc)
    'asciidoc_legacy',   // (AsciiDoc Legacy)
    'asciidoctor',       // (AsciiDoctor)
    'beamer',            // (LaTeX beamer slide show)
    'biblatex',          // (BibLaTeX)
    'bibtex',            // (BibTeX)
    'chunkedhtml',       // (Chunked HTML)
    'commonmark',        // (CommonMark Markdown)
    'commonmark_x',      // (CommonMark Markdown with extensions)
    'context',           // (ConTeXt)
    'csljson',           // (CSL JSON)
    'djot',              // (Djot markup)
    'docbook',           // (DocBook)
    'docbook4',          // (DocBook 4)
    'docbook5',          // (DocBook 5)
    'docx',              // (Word docx)
    'dokuwiki',          // (DokuWiki markup)
    'dzslides',          // (DZSlides HTML5 + JavaScript slide show)
    'epub',              // (EPUB)
    'epub2',             // (EPUB v2)
    'epub3',             // (EPUB v3)
    'fb2',               // (FictionBook2 e-book)
    'gfm',               // (GitHub-Flavored Markdown)
    'haddock',           // (Haddock markup)
    'html',              // (HTML5/XHTML polyglot markup)
    'html4',             // (XHTML 1.0 Transitional)
    'html5',             // (HTML5)
    'icml',              // (InDesign ICML)
    'ipynb',             // (Jupyter notebook)
    'jats',              // (JATS XML)
    'jats_archiving',    // (JATS Archiving)
    'jats_articleauthoring', // (JATS Article Authoring)
    'jats_publishing',   // (JATS Publishing)
    'jira',              // (Jira wiki markup)
    'json',              // (JSON version of native AST)
    'latex',             // (LaTeX)
    'man',               // (roff man)
    'markdown',          // (Pandoc's Markdown)
    'markdown_github',   // (deprecated GitHub-Flavored Markdown)
    'markdown_mmd',      // (MultiMarkdown)
    'markdown_phpextra', // (PHP Markdown Extra)
    'markdown_strict',   // (original unextended Markdown)
    'markua',            // (Markua)
    'mediawiki',         // (MediaWiki markup)
    'ms',                // (roff ms)
    'muse',              // (Muse)
    'native',            // (native Haskell)
    'odt',               // (OpenDocument)
    'opendocument',      // (OpenDocument)
    'opml',              // (OPML)
    'org',               // (Emacs Org mode)
    'pdf',               // (PDF)
    'plain',             // (plain text)
    'pptx',              // (PowerPoint slide show)
    'revealjs',          // (reveal.js)
    'rst',               // (reStructuredText)
    'rtf',               // (Rich Text Format)
    's5',                // (S5 HTML and JavaScript slide show)
    'slideous',          // (Slideous HTML and JavaScript slide show)
    'slidy',             // (Slidy HTML and JavaScript slide show)
    'tei',               // (TEI Simple)
    'texinfo',           // (GNU Texinfo)
    'textile',           // (Textile)
    'typst',             // (Typst)
    'xwiki',             // (XWiki markup)
    'zimwiki',           // (ZimWiki markup)
  ]
}

export const extensions = {
  ansi: 'txt',
  asciidoc: 'adoc',
  asciidoc_legacy: 'adoc',
  asciidoctor: 'adoc',
  biblatex: 'bib',
  bibtex: 'bib',
  bits: 'xml',
  chunkedhtml: 'html',
  commonmark: 'md',
  commonmark_x: 'md',
  creole: 'creole',
  csljson: 'json',
  csv: 'csv',
  djot: 'djot',
  docbook: 'xml',
  docbook4: 'xml',
  docbook5: 'xml',
  docx: 'docx',
  dokuwiki: 'txt',
  dzslides: 'html',
  endnotexml: 'xml',
  epub: 'epub',
  epub2: 'epub',
  epub3: 'epub',
  fb2: 'fb2',
  gfm: 'md',
  haddock: 'txt',
  html: 'html',
  html4: 'html',
  html5: 'html',
  icml: 'icml',
  ipynb: 'ipynb',
  jats: 'xml',
  jats_archiving: 'xml',
  jats_articleauthoring: 'xml',
  jats_publishing: 'xml',
  jira: 'txt',
  json: 'json',
  latex: 'tex',
  man: '1',
  markdown: 'md',
  markdown_github: 'md',
  markdown_mmd: 'md',
  markdown_phpextra: 'md',
  markdown_strict: 'md',
  markua: 'md',
  mdoc: 'mdoc',
  mediawiki: 'wiki',
  ms: 'ms',
  muse: 'muse',
  native: 'hs',
  odt: 'odt',
  opendocument: 'odt',
  opml: 'opml',
  org: 'org',
  pdf: 'pdf',
  plain: 'txt',
  pod: 'pod',
  pptx: 'pptx',
  revealjs: 'html',
  ris: 'ris',
  rst: 'rst',
  rtf: 'rtf',
  s5: 'html',
  slideous: 'html',
  slidy: 'html',
  t2t: 't2t',
  tei: 'xml',
  texinfo: 'texi',
  textile: 'textile',
  tikiwiki: 'txt',
  tsv: 'tsv',
  twiki: 'txt',
  typst: 'typ',
  vimwiki: 'wiki',
  xwiki: 'wiki',
  zimwiki: 'txt'
}

export const markdownExtensions = {
  enabled: [
    'all_symbols_escapable',    // 允许转义所有符号
    'auto_identifiers',         // 自动生成标题标识符
    'backtick_code_blocks',     // 支持反引号代码块
    'blank_before_blockquote',  // 引用块前需要空行
    'blank_before_header',      // 标题前需要空行
    'bracketed_spans',          // 支持带属性的行内范围
    'citations',                // 支持引用
    'definition_lists',         // 支持定义列表
    'escaped_line_breaks',      // 支持转义换行
    'example_lists',            // 支持示例列表
    'fancy_lists',              // 支持高级列表格式
    'fenced_code_attributes',   // 支持代码块属性
    'fenced_code_blocks',       // 支持围栏代码块
    'fenced_divs',             // 支持带属性的区块
    'footnotes',               // 支持脚注
    'grid_tables',             // 支持网格表格
    'header_attributes',       // 支持标题属性
    'implicit_figures',        // 支持隐式图片
    'implicit_header_references', // 支持隐式标题引用
    'inline_code_attributes',  // 支持行内代码属性
    'inline_notes',           // 支持行内注释
    'intraword_underscores',  // 支持词内下划线
    'latex_macros',           // 支持 LaTeX 宏
    'line_blocks',            // 支持行块
    'link_attributes',        // 支持链接属性
    'markdown_in_html_blocks', // 支持 HTML 块中的 Markdown
    'multiline_tables',       // 支持多行表格
    'native_divs',           // 支持原生 div
    'native_spans',          // 支持原生 span
    'pandoc_title_block',    // 支持 Pandoc 标题块
    'pipe_tables',           // 支持管道表格
    'raw_attribute',         // 支持原始属性
    'raw_html',              // 支持原始 HTML
    'raw_tex',              // 支持原始 TeX
    'shortcut_reference_links', // 支持快捷引用链接
    'simple_tables',         // 支持简单表格
    'smart',                // 支持智能标点
    'space_in_atx_header',  // 支持 ATX 标题中的空格
    'startnum',             // 支持起始编号
    'strikeout',           // 支持删除线
    'subscript',           // 支持下标
    'superscript',         // 支持上标
    'task_lists',          // 支持任务列表
    'table_captions',      // 支持表格标题
    'tex_math_dollars',    // 支持 TeX 数学美元符号
    'yaml_metadata_block'  // 支持 YAML 元数据块
  ],
  disabled: [
    'abbreviations',        // 缩写
    'angle_brackets_escapable', // 尖括号可转义
    'ascii_identifiers',    // ASCII 标识符
    'autolink_bare_uris',   // 自动链接裸 URI
    'compact_definition_lists', // 紧凑定义列表
    'east_asian_line_breaks', // 东亚换行
    'emoji',               // 表情符号
    'four_space_rule',     // 四空格规则
    'gfm_auto_identifiers', // GFM 自动标识符
    'gutenberg',           // Gutenberg 格式
    'hard_line_breaks',    // 硬换行
    'ignore_line_breaks',  // 忽略换行
    'lists_without_preceding_blankline', // 无前导空行的列表
    'literate_haskell',    // 文学化 Haskell
    'mark',               // 标记
    'markdown_attribute',  // Markdown 属性
    'mmd_header_identifiers', // MMD 标题标识符
    'mmd_link_attributes', // MMD 链接属性
    'mmd_title_block',    // MMD 标题块
    'old_dashes',         // 旧破折号
    'rebase_relative_paths', // 重定基相对路径
    'short_subsuperscripts', // 短上下标
    'spaced_reference_links', // 带空格的引用链接
    'tex_math_double_backslash', // TeX 数学双反斜杠
    'tex_math_single_backslash', // TeX 数学单反斜杠
    'wikilinks_title_after_pipe', // 管道后的 Wiki 链接标题
    'wikilinks_title_before_pipe' // 管道前的 Wiki 链接标题
  ]
}
