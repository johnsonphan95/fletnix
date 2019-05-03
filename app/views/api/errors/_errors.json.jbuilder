error_set.errors.keys.each do |field|
    json.set! field, error_set.errors.full_messages_for(field)
end