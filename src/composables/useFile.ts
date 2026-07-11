import { ref } from "vue";

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
]

const MAX_SIZE = 2.5 * 1024 * 1024;

const error = ref<string | null>(null)

export const useFile = () => {

  const file = ref<File | null>(null)

  const validateExtension = (selected: File) => {
    if (!ALLOWED_TYPES.includes(selected.type)) {
      error.value = 'Допустимые форматы: PDF, DOC, DOCX, XLS, XLSX, TXT'
      return false
    }
    return true
  }

  const handleFile = (event: any) => {
    const input = event.target as HTMLInputElement;
    const selected = input.files?.[0]

    if (!selected) return

    if (!validateExtension(selected)) {
      file.value = null
      return;
    }

    if (selected.size > MAX_SIZE) {
      file.value = null
      error.value = 'Максимальный размер файла: 25 МБ'
      return;
    }

    normalizeFilename(selected.name)

    error.value = null
    file.value = new File([selected], normalizeFilename(selected.name), { type: selected.type })
  }

  const clearFile = () => {
    file.value = null
    error.value = null
  }


  const normalizeFilename = (filename: string): string => {
    if (filename.length <= 14) return filename

    const lastDot = filename.lastIndexOf('.')
    const name = lastDot !== -1 ? filename.slice(0, lastDot) : filename
    const ext = lastDot !== -1 ? filename.slice(lastDot) : ''

    const counterMatch = name.match(/\s\(\d+\)$/)

    if (counterMatch) {
      const counterStr = counterMatch[0]
      const maxLength = 11 - counterStr.length
      const cleanName = name.slice(0, Math.max(5, maxLength))
      return `${cleanName}...${counterStr}  ${ext}`
    }

    return `${name.slice(0, 10)}...${ext}`
  }

  return {
    handleFile,
    clearFile,
    file,
    error
  }
}