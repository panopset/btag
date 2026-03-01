package com.panopset.be

import tools.jackson.databind.ObjectMapper
import tools.jackson.databind.ObjectWriter

class JsonHelper<T> {
    fun object2json(obj: T): String {
        val ow: ObjectWriter = ObjectMapper().writerWithDefaultPrettyPrinter()
        val json: String = ow.writeValueAsString(obj)
        return json
    }
}
