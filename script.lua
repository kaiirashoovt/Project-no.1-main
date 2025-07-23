local lines = {
    "  001#Договор                  D        0  Mon May 12 06:23:02 2025",
    "  ..                                  D        0  Wed May 28 09:34:32 2025",
    "  007#Платежные документы      D        0  Tue Jul 13 10:10:07 2021",
    "  somefile.txt                    A        1234  Wed Jul 14 10:10:07 2021"
}

for _, line in ipairs(lines) do
    local name = line:match("^%s*(.-)%s+D%s+%d+")
    if name then
        output = ("Папка: " .. name)
    else
        output =  ("Не папка: " .. line)
    end
end


